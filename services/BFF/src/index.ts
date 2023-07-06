import app from "./app";

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}
export default app;
