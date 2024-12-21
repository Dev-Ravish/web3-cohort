"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const GenerateSeedButton = () => {
  const [seed, setSeed] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  const [buttonText, setButtonText] = useState("Generate Wallet");
  const [wallets, setWallets] = useState([]);
  const generateSeed = () => {
    const mnemonic = generateMnemonic();
    setMnemonic(mnemonic);
    const seed = mnemonicToSeedSync(mnemonic);
    setSeed(seed.toString("hex"));
    setButtonText("Add Wallet");
    return seed.toString("hex");
  };
    
  const addWallet = () => { 
    const keypair = Keypair.generate();
    const publicKey = keypair.publicKey.toString();
    const secretKey = keypair.secretKey;
    const wallet = { publicKey, secretKey };
    setWallets([...wallets, wallet]);

  }
  const generateWallet = () => {
    const seed = generateSeed();
    console.log(seed);
  };

  return (
    <div  className='flex flex-col items-center'>
        <div>
            <Button
                onClick={buttonText === "Generate Wallet" ? generateWallet : addWallet}
                className="border border-gray-700 p-2 text-slate-500 hover:text-slate-400 rounded-md"
                >
                {buttonText}
            </Button>
        </div>
        {mnemonic && <div className="text-sm text-gray-500 mt-2">Mnemonic: {mnemonic}</div>}

        {seed && <div className="text-sm text-gray-500 mt-2">Seed: {seed}</div>}

        <div className="flex flex-col items-center mt-4">
            {wallets.length>0 && wallets.map((wallet, index) => (
                <div key={index} className="flex flex-col items-center mt-4">
                    <div className="text-sm text-gray-500">Public Key: {wallet.publicKey}</div>
                    <div className="text-sm text-gray-500">Secret Key: {wallet.secretKey}</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default GenerateSeedButton;