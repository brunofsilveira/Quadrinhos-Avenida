import React, { Component } from 'react'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

import Card from './Card'

export default class Home extends Component {

  state = {
    quadrinhos: []
  }

  componentDidMount() {
    this.loadQuadrinhos()
  }

  loadQuadrinhos = async () => {
    let quadrinhos = []

    if (navigator.onLine) {
      firebase.firestore().collection('quadrinhos').orderBy('nome').onSnapshot(snapshot => {

        snapshot.docChanges().forEach(change => {

          if (change.type === 'added') {
            quadrinhos.push({ id: change.doc.id, ...change.doc.data() })
          }

          if (change.type === 'modified') {
            quadrinhos = quadrinhos.map(quadrinho => quadrinho.id === change.doc.id ?
              { id: change.doc.id, ...change.doc.data() }
              : quadrinho)
          }

          if (change.type === 'removed') {
            quadrinhos = quadrinhos.filter(quadrinho => quadrinho.id !== change.doc.id)
          }
        })
        this.setState({ quadrinhos })
        localStorage.setItem('quadrinhos', JSON.stringify(quadrinhos))
      })
    } else {
      let dados = await JSON.parse(localStorage.getItem('quadrinhos'))
      quadrinhos = dados
      this.setState({ quadrinhos })
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.quadrinhos.map((quadrinho) => (
            <Card key={quadrinho.id}
              id={quadrinho.id}
              editora={quadrinho.editora}
              foto={quadrinho.foto}
              genero={quadrinho.genero}
              nome={quadrinho.nome}
              paginas={quadrinho.paginas}
              preco={quadrinho.preco}
              volumes={quadrinho.volumes}
            />
          ))}
        </div>
      </div>
    )
  }
}
