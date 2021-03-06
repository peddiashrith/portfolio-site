import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import Header from "../header"
import Footer from "../footer"

import "./mainlayout.scss"

const MainLayout = props => {
  let bgUrl = "https://source.unsplash.com/collection/10741347"

  const [image, setImage] = useState(undefined)

  const [ismouseovertext, setismouseovertext] = useState(false)
  const toggleismouseovertext = val => {
    setismouseovertext(val)
  }

  useEffect(() => {
    async function getImage(url) {
      let imageBlob
      try {
        imageBlob = (
          await axios.get(url, {
            responseType: "blob",
          })
        ).data
      } catch (err) {
        return null
      }
      return URL.createObjectURL(imageBlob)
    }
    async function getImages() {
      let tmp = await getImage(bgUrl)
      // console.log(tmp)
      setImage(tmp)
      // getImages()
    }
    getImages()
  }, [bgUrl])

  let textcard = (
    <div className={`textcard-C`}>
      <div className={[`textcardbg`, image && `visible`].join(" ")}>
        <div
          className={`clip-text`}
          style={
            image && {
              backgroundImage: `url(${image})`,
            }
          }
          onMouseEnter={() => {
            toggleismouseovertext(false)
          }}
          onMouseLeave={() => {
            toggleismouseovertext(true)
          }}
        >
          <span>TUSHAR</span>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={[`L-flex-C`].join(" ")}
      style={
        image && {
          backgroundImage: `url(${image})`,
          overflowY: `hidden`,
          height: `100vh`,
        }
      }
    >
      <div
        className={[`reveal-header`, ismouseovertext && `visible-header`].join(
          " "
        )}
      >
        <Header title={props.title} path={props.path} no_border_top={true} />
      </div>
      <div className={`wrapper`}>{textcard}</div>
      <div
        className={[`reveal-footer`, ismouseovertext && `visible-footer`].join(
          " "
        )}
      >
        <Footer visible={false} />
      </div>
      <div className={[`S-border`, `border-bottom`].join(" ")}></div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
