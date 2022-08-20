const { Contact, schemas } = require("../models/contact");

const { createError } = require("../helpers");

const updateContact = async (req, res) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateContact;
