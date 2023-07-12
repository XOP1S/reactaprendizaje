import React from "react";

export const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        className="input-add"
        name="description"
        value="Aprnder Php"
        placeholder="¿Qué quieres hacer?"
      />

      <button className="btn-add" type="submit">Agregar</button>
    </form>
  );
};
