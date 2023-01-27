import mongoose from "mongoose";

const editoraSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        pais: {type: String}
    }
);

const editoras = mongoose.model("editoras", editoraSchema);

export default editoras;