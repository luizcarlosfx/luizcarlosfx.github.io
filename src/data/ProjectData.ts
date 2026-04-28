export type ProjectOrigin = 'formulaxr' | 'freelance' | 'personal';
export type ProjectTag = 'games' | 'serious-games' | 'event-activations' | 'tools-sdks';

export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumbnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar
    origin: ProjectOrigin;
    tags: ProjectTag[];

    constructor(
        id: string,
        name: string,
        iconUrl: string,
        html: string,
        accentColor = "#000000",
        origin: ProjectOrigin = 'formulaxr',
        tags: ProjectTag[] = [],
        isHigh = false,
        isWide = false,
    ) {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.origin = origin;
        this.tags = tags;
    }
}
