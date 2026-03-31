import { createRequire } from "module";

const require = createRequire(import.meta.url);
const commander = require("commander");

function normalizeFlags(flags) {
  if (typeof flags !== "string") {
    return flags;
  }

  return flags
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (/^-[^-].+/.test(trimmed) && !/^-[A-Za-z]$/.test(trimmed)) {
        return `--${trimmed.slice(1)}`;
      }
      return trimmed;
    })
    .join(", ");
}

export const Argument = commander.Argument;
export const Command = commander.Command;
export const CommanderError = commander.CommanderError;
export const Help = commander.Help;
export const InvalidArgumentError = commander.InvalidArgumentError;
export const InvalidOptionArgumentError = commander.InvalidArgumentError;
export class Option extends commander.Option {
  constructor(flags, description) {
    super(normalizeFlags(flags), description);
  }
}
export const createArgument = (...args) => new commander.Argument(...args);
export const createCommand = (...args) => new commander.Command(...args);
export const createOption = (...args) => new Option(...args);
export const program = commander.program;
export default {
  Argument,
  Command,
  CommanderError,
  Help,
  InvalidArgumentError,
  InvalidOptionArgumentError,
  Option,
  createArgument,
  createCommand,
  createOption,
  program,
};
