export const home = (req, res) => res.render("home", { pageTitle: "Home"});

export const search = (req, res) => {
    const {query: { term: searchingBy }} = req;
    res.render("search", { pageTitle: "Search", searchingBy})
};

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos"});

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload"});

export const videoDetail = (req, res) => res.render("video Detail", { pageTitle: "VideoDetail"});

export const editVideo = (req, res) => res.render("edit Video", { pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("delete Video", { pageTitle: "Delete Video"});