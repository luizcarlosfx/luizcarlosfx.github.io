// Anonymous, cookieless visit counts through GoatCounter. Put the site code from
// goatcounter.com in GOATCOUNTER_CODE to turn it on. While it is empty nothing loads
// and nothing is sent, so the site behaves exactly as it did before.
const GOATCOUNTER_CODE = "luizcarlosfx";

interface CountData {
  path: string;
  title?: string;
  event?: boolean;
}

interface GoatCounter {
  no_onload?: boolean;
  count?: (data: CountData) => void;
}

declare global {
  interface Window {
    goatcounter?: GoatCounter;
  }
}

const pending: CountData[] = [];
let started = false;

function send(data: CountData): void {
  if (!GOATCOUNTER_CODE) return;
  const counter = window.goatcounter;
  if (counter && counter.count) counter.count(data);
  else pending.push(data);
}

export function initAnalytics(): void {
  if (!GOATCOUNTER_CODE || started) return;
  started = true;
  // The router uses hash URLs, so the automatic pageview is off and every route is counted by hand.
  // The key names belong to GoatCounter, so the camelcase rule does not apply to them.
  // eslint-disable-next-line @typescript-eslint/camelcase
  window.goatcounter = { no_onload: true };
  const script = document.createElement("script");
  script.async = true;
  script.src = "//gc.zgo.at/count.js";
  script.setAttribute("data-goatcounter", "https://" + GOATCOUNTER_CODE + ".goatcounter.com/count");
  script.onload = () => {
    const counter = window.goatcounter;
    while (pending.length && counter && counter.count) {
      counter.count(pending.shift() as CountData);
    }
  };
  document.head.appendChild(script);
}

export function trackPage(path: string, title: string): void {
  send({ path, title });
}

export function trackProjectOpen(id: string, name: string): void {
  send({ path: "open/" + id, title: name, event: true });
}

function durationBucket(seconds: number): string {
  if (seconds < 10) return "0-10s";
  if (seconds < 30) return "10-30s";
  if (seconds < 60) return "30-60s";
  if (seconds < 180) return "1-3min";
  return "3min+";
}

// GoatCounter counts events and does not store numbers, so the time a project stays open is
// recorded as a bucket, for example "time/virtua/30-60s".
export function trackProjectClose(id: string, name: string, seconds: number): void {
  const bucket = durationBucket(seconds);
  send({ path: "time/" + id + "/" + bucket, title: name + ", " + bucket, event: true });
}
