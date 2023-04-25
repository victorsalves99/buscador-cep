document.querySelector(".buscar").addEventListener("click", async () => {
  const cep = document.querySelector("#cep").value;
  const validCep = /^[0-9]{5}-?[0-9]{3}$/;
  console.log(cep)
  if (validCep.test(cep)) {
    const resp = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .then((res) => res.json())
      .catch((res) => window.alert(`Cep invalido tente Outro: Erro: ${res}`));
    console.log(resp);
    CriarCard(resp);
  }else {
    window.alert("Email Invalido")
  }

  cep.value = "";
});

const CriarCard = (data) => {
  const results = document.querySelector(".results");
  results.innerText = "";

  const boxRes = document.createElement("div");
  boxRes.setAttribute("class", "box-res");

  const cep = document.createElement("p");
  cep.innerText = `Cep:`;
  const cepSpan = document.createElement("span");
  cepSpan.innerText = `${data.cep}`;
  cep.append(cepSpan);

  const estado = document.createElement("p");
  estado.innerText = `Estado:`;
  const estadoSpan = document.createElement("span");
  estadoSpan.innerText = `${data.state}`;
  estado.append(estadoSpan);

  const cidade = document.createElement("p");
  cidade.innerText = `Cidade:`;
  const cidadeSpan = document.createElement("span");
  cidadeSpan.innerText = `${data.city}`;
  cidade.append(cidadeSpan);

  const bairro = document.createElement("p");
  bairro.innerText = `Bairro:`;
  const bairroSpan = document.createElement("span");
  bairroSpan.innerText = `${data.neighborhood}`;
  bairro.append(bairroSpan);

  const rua = document.createElement("p");
  rua.innerText = "Rua:";
  const ruaSpan = document.createElement("span");
  ruaSpan.innerText = `${data.street}`;
  rua.append(ruaSpan);

  boxRes.append(cep, estado, cidade, bairro, rua);

  results.appendChild(boxRes);
};
