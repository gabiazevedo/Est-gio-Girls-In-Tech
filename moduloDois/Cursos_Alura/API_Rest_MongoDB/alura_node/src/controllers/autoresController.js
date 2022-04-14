import autores from '../model/Autor.js';

class AutorController {

  static listarAutores = (_req, res) => {
    autores.find((_err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutorPorId = (req, res) => {
    const { id } = req.params;

    autores.findById(id, (err, autores) => {
      if(err) {
        res.status(400).send({ message: `${err.message} - Id do autor não encontrado.` });
      } else {
        res.status(200).send(autores);
      };
    });
  }

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Falha ao cadastrar autor.`})
      } else {
        res.status(201).send(autor.toJSON());
      };
    });
  };

  static atualizarAutor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(204).send({ message: "Autor atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: `${err.message }`});
      };
    });
  };

  static excluirAutor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndRemove(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      };
    });
  };
};

export default AutorController;