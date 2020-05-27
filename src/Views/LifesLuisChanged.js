import React from 'react'

import '../Styles/lifes-changed.css'
import ImageZaca from '../Assets/image-zaca.png'
import ImageThiago from '../Assets/image-thiago.png'
import ImageNathalie from '../Assets/image-nathalie.png'
import ImageArthur from '../Assets/image-arthur.png'

function LuisCountries(){
    return (
        <>
            <div className="people-content">
                <p className="title">Pessoas que o <strong>Luis</strong> salvou</p>
                <div className="people">
                    <div className="left">
                        <div className="border">
                            <span>
                                <p className="person-name">Zaca</p>
                                <p className="testimony">
                                    "Saber‌ ‌lecionar‌ ‌uma‌ ‌boa‌ ‌aula‌ ‌é‌ ‌para‌ ‌poucos,‌ ‌agora‌ ‌saber‌ ‌ensinar‌
                                    qualquer‌ ‌pessoa‌ ‌tirando suas‌ ‌dúvidas‌ ‌é‌ ‌QUASE‌ ‌IMPOSSÍVEL!!!!!!!‌
                                    Porém‌ ‌esse‌ ‌cara,‌ ‌essa‌ ‌pessoa‌ ‌conseguiu‌ ‌esse feito,‌ ‌Luís‌ ‌Felipe,‌
                                    Luizgod,‌ ‌Presidente‌ ‌da‌ ‌ETEC‌ ‌de‌ ‌Embu,‌ ‌uma pessoa‌ ‌que‌ ‌consegue alugar‌
                                    ‌um‌ ‌parque‌ ‌no‌ ‌canadá,‌ ‌é uma‌ ‌pessoa‌ ‌que‌ ‌se‌ ‌dispõe‌ ‌a‌ ‌fazer‌ ‌as‌ ‌coisas‌
                                    da‌ ‌melhor‌ forma‌ ‌possível,‌ ‌tenho‌ ‌certeza‌ ‌que‌ ‌qualquer‌ ‌pessoa‌ ‌que‌ ‌o‌
                                    ‌conheça‌ admira,‌ ‌O‌ ‌CARA‌ ‌É‌ ‌BOM!!!!!!‌‌‌‌"
                                </p>
                            </span>
                            <img src={ ImageZaca } alt="Foto do Zacarias" />
                        </div>
                        <div>
                            <span>
                                <p className="person-name">Thiago</p>
                                <p className="testimony">
                                    "Eu amo o Luis pq ele é muito gente boa, como não amar aquele cara?
                                    Eu fico me perguntando como é possivel uma pessoa ter a paciência
                                    que ele tem. Ele explica de uma maneira didática e de uma forma que
                                    estimula os alunos a aprenderem, sempre esclarece todas as dúvidas
                                    dos alunos com um conhecimento vasto e muita humildade."
                                </p>
                            </span>
                            <img src={ ImageThiago } alt="Foto do Thiago" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="border">
                            <img src={ ImageNathalie } alt="Foto da Nathalie" />
                            <span>
                                <p className="person-name">Nathalie</p>
                                <p className="testimony">
                                    "Eu não tenho a intenção de me tornar uma professora um dia, mas é
                                    impossível olhar pro Luis dando aula e não me sentir inspirada. São
                                    professores como ele que fazem os alunos se sentirem a vontade em
                                    sala de aula, sabemos que podemos tirar 1001 dúvidas com ele e ele
                                    vai tentar explicar tudo da forma mais didática possível, sabemos
                                    que podemos brincar com ele e ele vai rir junto. Espero que todos
                                    os estudantes encontrem um "Luis" na sua vida acadêmica."
                                </p>
                            </span>
                        </div>
                        <div>
                            <img src={ ImageArthur } alt="Foto do Arthur" />
                            <span>
                                <p className="person-name">Arthur</p>
                                <p className="testimony">
                                    "Atualmente é muito difícil encontrar uma pessoa tão determinada e
                                    empática como o Luis, com ele não existem dúvidas ou desavenças, é
                                    a pessoa que estará disposta a te ajudar não importando onde nem quando.
                                    Sempre está preparado e se adapta muito fácil; nos ensinar códigos
                                    não é a única coisa que ele faz, tenho certeza que todos nós
                                    aprendemos a sermos grandes profissionais, nos inspirando no
                                    melhor exemplo."
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LuisCountries
