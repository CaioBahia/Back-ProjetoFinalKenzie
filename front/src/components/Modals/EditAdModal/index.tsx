const editModal = () => {
  return (
    <dialog>
      <div>
        <p>Editar anúncio</p>
        <button>X</button>
      </div>
      <div>
        <p>Informaçoes do veiculo</p>
        <div>
          {/* subistituir por component input! */}
          <p>marca</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          {/* subistituir por component input! */}
          <p>modelo</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <div>
            {/* subistituir por component input! */}
            <p>Ano</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            {/* subistituir por component input! */}
            <p>Combustivel</p>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div>
          <div>
            {/* subistituir por component input! */}
            <p>km</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            {/* subistituir por component input! */}
            <p>Cor</p>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div>
          <div>
            {/* subistituir por component input! */}
            <p>fipe</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            {/* subistituir por component input! */}
            <p>preço</p>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div>
          <p> descrição</p>
        </div>

        <section>
          <p>publicado</p>
          <div>
            <button>Sim</button>
            <button>Não</button>
          </div>
        </section>
        <section>
          <div>
            {/* subistituir por component input! */}
            <p>CoverImg</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            {/* subistituir por component input! */}
            <p>IMG</p>
            <input type="text" name="" id="" />
          </div>
          <button>Adicionar campo para imagem da galeria</button>
        </section>
        <section>
          <button>Excluir Ad</button>
          <button>Salvar Alteração</button>
        </section>
      </div>
    </dialog>
  );
};
