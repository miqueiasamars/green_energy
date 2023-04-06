export const FB_PIXEL_ID = 510890794345989
// export const FB_PIXEL_ID = 1245627119505595

declare global {
  interface Window {
    fbq:any;   
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name:any, options = {}) => {
  window.fbq('track', name, options)
}

