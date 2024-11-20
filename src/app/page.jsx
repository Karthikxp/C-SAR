function App() {
  return (
    <>
      <div className="about">
        <section className="cs-aboutcontainer">
          <h1>SAR Image Colorization</h1>
          <p>
            Synthetic Aperture Radar (SAR) images are a type of remote sensing
            imagery captured using radar signals, providing detailed insights
            into terrain and structures even in challenging weather conditions
            or at night. However, these images are often noisy upon initial
            capture, requiring a denoising process to remove unwanted artifacts
            and enhance the visual clarity. Once denoised, SAR images can be
            colorized using machine learning models, which add color based on
            various data interpretations, turning the grayscale imagery into
            more intuitive and visually comprehensible representations. This
            colorization helps in better understanding and analyzing the
            underlying features.
          </p>
          <div className="cs-aboutimagecont">
            <img src="/raw.jpg" alt="" />
            <img src="/arrow.svg" alt="" className="arrow" />
            <img src="/denoised.jpg" alt="" />
            <img src="/arrow.svg" alt="" className="arrow" />
            <img src="/colorized.jpg" alt="" />
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NGK6YKE2O3c?si=SnsC5aLDCEdpIEPJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{
              display: 'block',
              margin: '0 auto',
              borderRadius: '12px',
            }}
          ></iframe>
          <h2>Purpose?</h2>
          <p>
            Colorization of SAR images has a wide range of applications,
            enhancing both visual interpretation and data analysis. By adding
            colors to otherwise grayscale images, it becomes easier to
            distinguish between different terrain types, land cover, or
            structural features, making it particularly useful in environmental
            monitoring, urban planning, and disaster management. Colorized SAR
            images allow for faster recognition of critical areas, such as flood
            zones or deforested regions, and improve the efficiency of machine
            learning models in tasks like land use classification. Additionally,
            colorization enhances communication of complex data to non-expert
            audiences, making it a valuable tool in educational and public
            outreach contexts.
          </p>
          <h2>How do we do it?</h2>
          <strong>
            C-SAR uses two approaches to provide deeper insights into SAR
            Imaging:{" "}
            <ol>
              <li>1. Image Denoising(Convulutional Autoencoders)</li>
              <li>2. Image Colorization(Pix2Pix GAN)</li>
            </ol>
          </strong>
          <p>
            Image Denoising in C-SAR is done by using Convolutional
            Autoencoders, CAEs are a novel approach to this process. Effective
            for image denoising by using unsupervised learning to reduce
            dimensionality while preserving key features of an image. CAEs
            compress noisy images into a lower-dimensional latent space,
            filtering out noise and retaining important details. This approach
            is highly effective in handling SAR image noise, such as speckle,
            while maintaining the integrity of terrain features and other key
            elements. Image colorization in C-SAR is performed by Pix2Pix GAN.
            It can transform grayscale images into vivid and colored ones. The
            generator learns to predict the colorized output, and a
            discriminator evaluates how close the generated image is to real
            data. This adversarial learning process ensures that the generator
            continually improves. It helps in adding depth and clarity by
            introducing realistic color schemes to otherwise monochromatic
            images. Denoised and colorized SAR images help users gain clearer
            insights by enhancing image clarity and detail. Denoising removes
            noise, improving the visibility of key features such as terrain and
            structures, enabling more accurate analysis. Colorization adds depth
            and differentiation, making it easier to identify materials and
            environmental features. Together, these techniques make SAR data
            more informative and useful for applications like monitoring and
            planning.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
