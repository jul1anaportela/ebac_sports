import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface CarrinhoState {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produtoExiste = state.itens.find(
        (produto) => produto.id === action.payload.id
      )
      if (!produtoExiste) {
        state.itens.push(action.payload)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter(
        (produto) => produto.id !== action.payload
      )
    },
    toggleFavorito(state, action: PayloadAction<Produto>) {
      const existeNosFavoritos = state.favoritos.find(
        (produtos) => produtos.id === action.payload.id
      )
      if (existeNosFavoritos) {
        state.favoritos = state.favoritos.filter(
          (produto) => produto.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, toggleFavorito } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
