import api from "../../api/api";
import "./CaixaMercadinho.css";

import { useState } from "react";
import logo from "../../assets/logo.png";

export default function CaixaMercadinho() {
  const [produtos, setProdutos] = useState([]);
  const [codigo, setCodigo] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("Dinheiro");

  const adicionarProduto = () => {
    if (codigo && produto && valor) {
      setProdutos([...produtos, { codigo, produto, valor: parseFloat(valor) }]);
      setCodigo("");
      setProduto("");
      setValor("");
    }
  };

  const total = produtos.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className="ContainerMerc">
      <img src={logo} alt="Logo da marca" className="ImgMerc" />
      <div className="ScrollContainer">
        <button className="BtnScroll" onClick={() => []}>
          Adicionar produtos
        </button>
        <button className="BtnScroll" onClick={() => []}>
          Lista de produtos
        </button>
      </div>
      <div className="Screen">
        <div className="LeftPanel">
          <h2>"Até aqui o Senhor nos ajudou". 1 Samuel 7:12</h2>
          <div className="TableMerc">
            <thead>
              <tr className="Tr">
                <th className="Th">Código</th>
                <th className="Th">Produto</th>
                <th className="Th">Valor</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((item, index) => (
                <tr className="Tr" key={index}>
                  <td className="TdC">{item.codigo}</td>
                  <td className="Td">{item.produto}</td>
                  <td className="Td">R$ {item.valor.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </div>
          <div className="TotalMerc">
            <h3>Total: R$ {total.toFixed(2)}</h3>
          </div>
        </div>
        <div className="RightPanel">
          <h2>Adicionar Produto</h2>
          <input
            className="InputMerc"
            placeholder="Código"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <input
            className="InputMerc"
            placeholder="Produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
          <input
            className="InputMerc"
            placeholder="Valor"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <button className="Btn" onClick={adicionarProduto}>
            Adicionar
          </button>
          <h2>Forma de Pagamento</h2>
          <select
            className="SelectMerc"
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
          >
            <option>Dinheiro</option>
            <option>Cartão</option>
            <option>PIX</option>
          </select>
          <button className="Btn" onClick={() => alert("Compra Finalizada!")}>
            Finalizar Venda
          </button>
          <button className="Btn" onClick={() => setProdutos([])}>
            Cancelar Venda
          </button>
        </div>
      </div>
    </div>
  );
}
