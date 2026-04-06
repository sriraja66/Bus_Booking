import * as busService from "../services/busService.js";


// CREATE BUS
export const createBus = async (req, res) => {

  try {

    const busData = req.body;

    const newBus = await busService.createBus(busData);
    

    res.send(newBus);

  } catch (error) {

    res.send("Error creating bus");

  }

};



// SEARCH BUSES
export const searchBuses = async (req, res) => {
  try {
    const { startingLocation, destination } = req.query;

    // Use a case-insensitive regex for searching location string
    const filter = {};
    if (startingLocation) filter.startingLocation = new RegExp(startingLocation, 'i');
    if (destination) filter.destination = new RegExp(destination, 'i');

    const buses = await busService.searchBusesService(filter);
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: "Error searching buses", error: error.message });
  }
};



// GET ALL BUSES
export const getAllBuses = async (req, res) => {

  try {

    const buses = await busService.getAllBuses();

    res.send(buses);

  } catch (error) {

    res.send("Error getting buses");

  }

};



// GET BUS BY ID
export const getBusById = async (req, res) => {

  try {

    const id = req.params.id;

    const bus = await busService.getBusById(id);

    if (!bus) {
      res.send("Bus not found");
      return;
    }

    res.send(bus);

  } catch (error) {

    res.send("Error getting bus");

  }

};



// UPDATE BUS
export const updateBus = async (req, res) => {

  try {

    const id = req.params.id;

    const data = req.body;

    const updatedBus = await busService.updateBus(id, data);

    if (!updatedBus) {
      res.send("Bus not found");
      return;
    }

    res.send(updatedBus);

  } catch (error) {

    res.send("Error updating bus");

  }

};



// DELETE BUS
export const deleteBus = async (req, res) => {

  try {

    const id = req.params.id;

    const deletedBus = await busService.deleteBus(id);

    if (!deletedBus) {
      res.send("Bus not found");
      return;
    }

    res.send("Bus deleted");

  } catch (error) {

    res.send("Error deleting bus");

  }

};