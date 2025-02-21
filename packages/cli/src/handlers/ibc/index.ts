import pc from "picocolors";
import {
  displaySpinnerAsync,
} from "../../common";
import State from "../../state";
import { Commands } from "../../types";

export const commands: Commands = {
  'packet-ack': {
    handler: packetAckHandler,
    color: pc.green,
    description: "Queries a contract info",
    usage: "ibc packet-ack <port-id> <channel-id> <packet-sequence>",
    inputs: [
      {
        requestMessage: "Input port-id:",
        validate: (input: string) => {
          return input.length > 0;
        },
      },
      {
        requestMessage: "Input channel-id:",
        validate: (input: string) => {
          return input.startsWith("channel-");
        },
      },
      {
        requestMessage: "Input packet-sequence:",
        validate: (input: string) => {
          return !Number.isNaN(parseInt(input));
        },
      }
    ],
  },
  'decode-ack': {
    handler: decodeAckHandler,
    color: pc.green,
    description: "Decodes an IBC acknowledgement",
    usage: "ibc decode-ack <acknowledgement>",
    inputs: [
      {
        requestMessage: "Input acknowledgement:",
        validate: (input: string) => {
          return input.length > 0;
        },
      }
    ]
  }
};

/**
 * Queries an IBC acknowledgement
 * @param input [port-id, channel-id, packet-sequence]
 */
async function packetAckHandler(input: string[]) {
  const [portId, channelId, packetSequence] = input;

  try {
    const resp = await displaySpinnerAsync(
      "Querying contract info...",
      async () => await State.client.queryIbcAck(portId, channelId, parseInt(packetSequence))
    );

    console.log();
    console.log(pc.bold(pc.green("Proof: ")), JSON.stringify(resp?.proof, null, 2));
    console.log(pc.bold(pc.green("Acknowledgement: ")), resp?.acknowledgement.result);
    console.log(pc.bold(pc.green("Proof Height: ")), resp?.proofHeight);
    console.log();
  } catch (error: any) {
    console.log(pc.red(`Failed to query IBC acknowledgement: ${error.message}`));
  }
}

/**
 * Decodes an IBC acknowledgement
 * @param input [acknowledgement]
 */
async function decodeAckHandler(input: string[]) {
  const [acknowledgement] = input;
  try {
    console.log(Buffer.from(acknowledgement, 'base64').toString('ascii'));
    const resp = await displaySpinnerAsync(
      "Decoding acknowledgement...",
      async () => await State.client.decodeAck(acknowledgement)
    );

    console.log();
    console.log(pc.bold(pc.green("Acknowledgement: ")), resp?.result);
    console.log();
  } catch (error: any) {
    console.log(pc.red(`Failed to decode acknowledgement: ${error.message}`));
  }
}

export default commands;
