/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface NFTFactoryInterface extends utils.Interface {
  contractName: "NFTFactory";
  functions: {
    "mintNFT(address,string,string)": FunctionFragment;
    "nftCounter()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mintNFT",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "nftCounter",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "mintNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftCounter", data: BytesLike): Result;

  events: {
    "Cloned(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Cloned"): EventFragment;
}

export type ClonedEvent = TypedEvent<[string], { clone: string }>;

export type ClonedEventFilter = TypedEventFilter<ClonedEvent>;

export interface NFTFactory extends BaseContract {
  contractName: "NFTFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    mintNFT(
      implementation_: string,
      cardName: string,
      cardSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nftCounter(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  mintNFT(
    implementation_: string,
    cardName: string,
    cardSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nftCounter(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    mintNFT(
      implementation_: string,
      cardName: string,
      cardSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nftCounter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Cloned(address)"(clone?: string | null): ClonedEventFilter;
    Cloned(clone?: string | null): ClonedEventFilter;
  };

  estimateGas: {
    mintNFT(
      implementation_: string,
      cardName: string,
      cardSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nftCounter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    mintNFT(
      implementation_: string,
      cardName: string,
      cardSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nftCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}