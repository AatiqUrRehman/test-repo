import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="sticky-footer" style={{background:"#4b4d4f"}}>
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2019</span>
        </div>
      </div>
    </footer>
    )
  }
}
