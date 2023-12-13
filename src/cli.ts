import { build } from "gluegun"
import { Options } from "gluegun/build/types/domain/options"

/**
 * Create the cli and kick it off
 */
async function run(argv: string | Options) {
  // create a CLI runtime
  const cli = build()
    .brand("ignite-cli")
    .exclude(["semver", "http", "template"])
    .src(__dirname)
    .defaultCommand(require("./commands/help"))
    .create()

  return cli.run(argv)
}

module.exports = { run }
