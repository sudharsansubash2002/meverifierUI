import firebases from "../firebdd";

export const createTxn = async(tokenname,txnhash,type,to,from) =>{
    let ref2 = await firebases.database().ref(`MeCollateralMarketing/TwitterEvent`);
        const db = ref2.push().key;   
        let currenttime = (new Date().getTime())/1000;                                                                   
        ref2.child(db).set({
          key:db,tokenNmae:tokenname,entryTime:currenttime,txnHash:txnhash,From:from,To:to,Type:type
        })
        .then(()=>{
          console.log(" updateTxn log done")
        }).catch((error) => {
            console.error("Error:", error);
          });

}

export const recordUserVisits = async (address, pageName) => {
  const locationDetails = await fetch('https://geolocation-db.com/json/')
  let location = await locationDetails.json();
  let ipAddress = location.IPv4;
  let region = location.country_name;

  let addressSet = address ? address : "Not Connected";

  let ref2 = firebases.database().ref(`MeCollateral/UserVisits`);
      const db = ref2.push().key;   
      let currentTime = (new Date().getTime())/1000;                                                                   
      ref2.child(db).set({
        address: addressSet,
        ipAddress: ipAddress,
        pageName: pageName,
        region: region,
        createdAt: currentTime,
      })
      .then(()=>{
        console.log(" update UserVisit done")
      }).catch((error) => {
          console.error("Error:", error);
        });
}

export const recordDashBoardDetails = async(price,circulatingSupply,floorprice,type) =>{
  let ref2 = await firebases.database().ref(`MeCollateral/PriceHistory`);
      const db = ref2.push().key;   
      let currenttime = (new Date().getTime())/1000;                                                                   
      ref2.child(db).set({
        key:db,price:price,circulatingSupply:circulatingSupply,floorPrice:floorprice,currentTime:currenttime,Type:type
      })
      .then(()=>{
        console.log(" updatePrice done")
      }).catch((error) => {
          console.error("Error:", error);
        });

}

const requiredActivities = [
  "Swap ME",
  "Add Liquidity",
  "Stake ME",
  "Stake ME-ETH",
  "Burn ME",
  "Auction Bid ETH"
];

export const hasCompletedAllActivities = async (address) => {
  try {
    const ref = firebases.database().ref('MeCollateral/TxnHistory');
    const snapshot = await ref.once("value");
    const data = snapshot.val();

    if (!data) {
      return [false, false, false, false, false, false]; // No data available
    }

    // Filter transactions by the given address
    const filteredTransactions = Object.values(data).filter(
      txn => txn.From === address || txn.To === address
    );

    // Create a set to store the types of activities performed by the address
    const performedActivities = new Set(
      filteredTransactions.map(txn => txn.Type)
    );
    
    const state1 = performedActivities.has("Swap ME");
    const state2 = performedActivities.has("Add Liquidity");
    const state3 = performedActivities.has("Stake ME");
    const state4 = performedActivities.has("Stake ME-ETH");
    const state5 = performedActivities.has("Burn ME");
    const state6 = performedActivities.has("Auction Bid ETH");

    console.log("state:", requiredActivities.every(activity => performedActivities.has(activity)), state1, state2, state3, state4, state5, state6);

    // Check if all required activities are present in the performed activities set
    return [requiredActivities.every(activity => performedActivities.has(activity)), state1, state2, state3, state4, state5, state6];
  } catch (error) {
    console.error("Error checking activities1:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

