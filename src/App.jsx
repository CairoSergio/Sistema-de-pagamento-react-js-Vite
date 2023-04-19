import { AiOutlineCheck, AiOutlineInfoCircle} from 'react-icons/ai'


function App() {
  return (
    <div className="Container">
      <div className="card essencial">
        <div className="content">
          <h1 className="title">PARA VOCÊ COMEÇAR</h1>
          <div className="pacote">
            <h1 className="pacote-nome">Essentials</h1>
            <div className="price">
              <span>R$</span>
              <h1>19,97</h1>
              <h2>/mês</h2>
            </div>
          </div>
          <button className="assinar-btn">Assinar Agora</button>
          <div className="division"></div>
          <div className="content-footer">
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className='essencial-beneficios'>Até 3 usuarios</span>
              </div>
              <AiOutlineInfoCircle color='#475569' size={20}/>
            </div>
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className='essencial-beneficios'>Autoatendimento</span>
              </div>
              <AiOutlineInfoCircle color='#475569' size={20}/>
            </div>
          </div>
        </div>
      </div>
      <div className="card ultimate">
        <div className="content">
          <h1 className="title ultimate-title">PARA VOCÊ DECOLAR</h1>
          <div className="pacote">
            <h1 className="pacote-nome ultimate-color">Ultimate</h1>
            <div className="price">
              <span className='ultimate-color'>R$</span>
              <h1 className='ultimate-color'>29,97</h1>
              <h2 className='ultimate-color'>/mês</h2>
            </div>
          </div>
          <button className="assinar-btn ultimate-btn">Assinar Agora</button>
          <div className="division ultimate-division"></div>
          <div className="content-footer">
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className="essencial-beneficios ultimate-beneficio">Usuarios ilimitados</span>
              </div>
              <AiOutlineInfoCircle color='#64748B' size={20}/>
            </div>
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className="essencial-beneficios ultimate-beneficio">Suporte 24/7</span>
              </div>
              <AiOutlineInfoCircle color='#64748B' size={20}/>
            </div>
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className="essencial-beneficios ultimate-beneficio">CMS Dedicado</span>
              </div>
              <AiOutlineInfoCircle color='#64748B' size={20}/>
            </div>
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className="essencial-beneficios ultimate-beneficio">Treinamentos</span>
              </div>
              <AiOutlineInfoCircle color='#64748B' size={20}/>
            </div>
          </div>
        </div>
      </div>
      <div className="card essencial">
        <div className="content">
          <h1 className="title">PARA SUA EMPRESA</h1>
          <div className="pacote">
            <h1 className="pacote-nome">Enterprise</h1>
          </div>
          <button className="assinar-btn">Fale com a gente</button>
          <div className="division"></div>
          <div className="content-footer">
            <div className="foot">
              <div className='foot-title'>
                <AiOutlineCheck size={20} color='#1B873F'/>
                <span className='essencial-beneficios'>Plano customizado especialmente para a necessidade de seu negocio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
