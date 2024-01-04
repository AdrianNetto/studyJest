import express, { Application } from "express";

class App {
  public app:Application
  constructor() {
    this.app = express()
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port} `)
    })
  }
}

export { App };
