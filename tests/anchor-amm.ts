import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorAmm } from "../target/types/anchor_amm";

describe("anchor-amm", () => {
  //client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorAmm as Program<AnchorAmm>;

  it("Is initialized!", async () => {
    //test
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);

  });
});