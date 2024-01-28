/**
 * contato-component
 * 
 * @author moreira 2023-11-03
 */

import { createElement as h } from "react";

// @ts-ignore
import { formPostComponent, labelComponent } from 'react-utils';

import axios from '../utils.src/axios';

export default (/** @type {*} */ props) => (children => h('div', { ...props, children }))(
  h(formPostComponent, {
    send: (/** @type {FormData} */ data) => axios.put('config/contato', data, {
      // headers: {'content-type': 'multipart/form-data'}
    }),
    title: 'contato',
    width: '400px',
    contents: [
      h(labelComponent, { input: 'nome', label: 'Nome', maxlength: 62 }),
      h(labelComponent, { input: 'email', label: 'E-mail', type: 'email', maxlength: 62 }),
      h(labelComponent, { input: 'assunto', label: 'Assunto', maxlength: 62 }),
      h(labelComponent, { input: 'mensagem', label: 'Mensagem', type: 'textarea' })
    ]
  })
)
