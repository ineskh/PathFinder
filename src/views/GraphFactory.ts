import { Edge } from "../domain/interfaces/Edge";
import { Vertex } from "../domain/interfaces/Vertex";
import { Path } from "./interfaces/Path";

/**
 * To build path as expected by ihm
 */
export default class GraphFactory {

    private static Metric1unit = "km";
    private static Metric2unit = "co";
    /**
     * Build the path "view"
     * @param params 
     * @param vertices 
     * @param totalWeight 
     */
    public static Build(graph : ReadonlyArray<Vertex>) : string[]
    {
       return [
        "..................................",
        ". +-----+ 126.5km +-----+ ........",
        ". | 000 |---------| 004 | ........",
        ". +-----+ 018.7co +-----+ ........",
        "... | ............. | ............",
        "... | 080.2km ..... | 005.3km ....",
        "... | 014.3co ..... | 000.2co ....",
        "... | ............. | ............",
        ". +-----+ 030.7km +-----+ ........",
        ". | 003 |---------| 001 | ........",
        ". +-----+ 004.0co +-----+ ........",
        "... | ............................",
        "... | 030.8km ....................",
        "... | 004.0co ....................",
        "... | ............................",
        ". +-----+ ........................",
        ". | 002 | ........................",
        ". +-----+ ........................",
        ".................................."
       ];
    };
}