import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Adam Drake",
  author: "Adam Drake",
  avatar: "https://avatars.githubusercontent.com/u/6083945?v=4",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:adamgedrake@gmail.com" },
    { title: "GitHub", url: "https://github.com/adamdrake210" },
    { title: "Twitter", url: "https://twitter.com/FrontEndDrake" },
  ],
  background: "#f9f9f9",
  middlewares: [
    ga("#"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});