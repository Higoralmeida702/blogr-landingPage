import './conteudoPrincipal.css'

const ConteudoPrincipal = () => {
    return (
        <div>
            <h1 className='titulo'>Designed for the future</h1>
            <section className='organizacaoConteudo'>
                <div className='conteudoDescricao'>
                <h1>Introducing an extensible editor</h1>
                <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                <div className='segundaDescricao'>
                <h1>Robust content management</h1>
                <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control</p>
                </div>
                </div>
                <img src="./imagens/illustration-editor-desktop.svg" alt="" />
            </section>
            <section className='organizacaoConteudo segundof'>
                <img src="./imagens/illustration-phones.svg" alt="" />
                <div className='conteudoDescricao'>
                <h1>State of the Art Infrastructure</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive</p>
                
                </div>
            </section>
            <section className='organizacaoConteudo terceiroConteudo'>
            <img className='laptopMobileImg' src="./imagens/illustration-laptop-mobile.svg" alt="" />
                <div className='conteudoDescricao'>
                <h1>Free, open, simple</h1>
                <p>Blogr is a free and open source application backed by a large community of heplful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean is relatively easy to learn.</p>
                <div className='segundaDescricao'>
                <h1>Powerful tooling</h1>
                <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
                </div>
            
            </section>
        </div>
    )
}

export default ConteudoPrincipal