import React from 'react'
import '~/components/style/style.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-title'>
            <span>BẢN QUYỀN CỦA TẤT CẢ CÁC SẢN PHẨM ĐỀU THUỘC VỀ STTRUYEN.XYZ</span>
        </div>
        <div className='footer-address'>
            <span>Địa chỉ liên hệ</span>
        </div>
        <div className='footer-email-facebook'>
            <span>Email : nmquang265@gmail.com</span>
            <span>Facebook <a style={{color:"#FFA511"}} href="https://www.facebook.com/bang.sunika.7" target="_blank">STTRUYEN</a></span>
        </div>
    </div>
  )
}

export default Footer