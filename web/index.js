async function main() {
    try {
        const Box = artifacts.require('Box');
        const box = await Box.deployed();
        const value = await box.retrieve();
        console.log('Box value is', value.toString());

        await box.store(23);

        // Call the retrieve() function of the deployed Box contract
        const value2 = await box.retrieve();
        console.log('new Box value is', value2.toString());
    } catch (error) {
      console.error(error);
    }
  };