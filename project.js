// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, color) {
  let nft = {
    name: name,
    description: description,
    color: color
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Description: " + nftCollection[i].description);
    console.log("Color: " + nftCollection[i].color);
    console.log("------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nftCollection.length);
}

// call your functions below this line
mintNFT("Mayank", "This is NFT 1", "Black");
mintNFT("Himanshu", "This is NFT 2", "Blue");
mintNFT("Anuj", "This is NFT 3", "Pink");

listNFTs();

getTotalSupply();