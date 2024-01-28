/**
 * @module section-component
 * 
 * @author moreira 2023-10-11
 */
'use strict'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const SectionComponent = props => {
  
    return h('section', Object.assign(props, {
      style: {
        height: '50%'
      },
      children: 'SECTION'
    }))
  }

  return { 
    
    setters: [
    
      ({ default: React }) => {
        h = React.createElement;
      }
      
    ], 
    
    execute: () => {
      _export('version', '0.1.0');
      _export('default', SectionComponent)
    } }
})
