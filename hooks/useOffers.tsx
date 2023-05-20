import { useCallback, useContext, useEffect, useState } from "react";
import { offersContext } from "../context/offersContext";
import { Offer, OfferResponse } from "../types";

export default function useOffers(){
    const {offers,loading,getOffers} = useContext(offersContext)

    return {offers,loading,getOffers: getOffers as ((query: string) => Promise<void>)}
}