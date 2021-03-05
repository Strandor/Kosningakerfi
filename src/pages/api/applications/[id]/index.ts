// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default ({ method }, res) => {
  switch (method) {
    case "GET":
      return res.json({
        id: "s",
        name: "Framtidin",
      });
    default:
      return res.status(405).json({
        message: `${method} not allowed`,
      });
  }
};
