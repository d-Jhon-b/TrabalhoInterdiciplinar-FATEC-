export function Footerbuild(){
    const Contentfooter = document.createElement('div')
    Contentfooter.className = 'footer'
    Contentfooter.innerHTML =`
                 <div class="footer-title">Siga @ratoroi</div>
                 <div class="footer-content">
                    <div class="footer-item">
                        <img src="/src/img/footer/instagram.png" alt="Instagram icon">
                        <a href="#" class="footer-link">Instagram</a>
                    </div>
                    <div class="footer-item">
                        <img src="/src/img/footer/facebook.png" alt="Facebook icon">
                        <a href="#" class="footer-link">Facebook</a>
                    </div>
                    <div class="footer-item">
                        <img src="/src/img/footer/email.png" alt="Email icon">
                        <a href="mailto:ratoroi@ratoroi.com.br?subject=teste&body=teste" class="footer-link" id='link_de_contato' target='_parent'>Arage@gmail.com</a>
                    </div>
                    <div class="footer-item">
                        <img src="/src/img/footer/telefone.png" alt="Phone icon">
                        <span class="footer-link">4733071008</span>
                    </div>
                    <div class="footer-item footer-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6509293961863!2d-46.47063642542268!3d-23.54505426099191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66c32a1240c5%3A0x7ea3cabece8e5d7a!2sFatec%20Itaquera!5e0!3m2!1spt-BR!2sbr!4v1732667060068!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p>
                        R. Max Wilhelm, 674 - Sala 06 - Vila Baependi, Jaraguá do Sul - SC, 89256-000
                        </p>
                    </div>
            `
        return Contentfooter
}