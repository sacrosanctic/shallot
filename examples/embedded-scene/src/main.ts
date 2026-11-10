import { runApp, shallotDark } from "@dylanebert/shallot";
import { mountHost } from "./host.ts";
import { revealAfterFirstFrame } from "./reveal.ts";
import { LoadingWorld } from "./scene.ts";

const host = mountHost();
const loading = shallotDark({
    container: host.frame,
    bootstrap: host.frame.querySelector<HTMLElement>("[data-shallot-bootstrap]") ?? undefined,
});
let app: Awaited<ReturnType<typeof runApp>> | undefined;
let pageClosed = false;
window.addEventListener("pagehide", () => {
    pageClosed = true;
    app?.dispose();
});

void runApp({
    plugins: [LoadingWorld, revealAfterFirstFrame(host, loading)],
    loading,
    pixelRatio: 1,
})
    .then((running) => {
        if (pageClosed) running.dispose();
        else app = running;
    })
    .catch(host.fail);
