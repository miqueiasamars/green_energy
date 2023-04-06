import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  titulo: string;
  descricao: string;
};

type ResponseData = {
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 587,
  secure: false,
  auth: {
    user: 'comercial@llconstrutora.com.br',
    pass: 'llconstrutora@1825',
  },
  tls: { rejectUnauthorized: false },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const formData: FormData = req.body;

    const messageHTML = `
      <header style="background-color: #796A37; color: #ffffff;">
        <div style="padding: 2% 10%; border-radius: 10px; font-size: 20px;">Olá, LL CONSTRUTORA</div>
      </header>
      <article>
        <div style="padding: 5% 10%;">
          <h4 style="color: #796A37; font-size: 18px;">Formulário de contato</h4>
          <h4 style="color:black; padding-top: 25px;">Nome: ${formData.nome}</h4>
          <h4 style="color:black; padding-top: 25px;">E-mail: ${formData.email}</h4>
          <h4 style="color:black; padding-top: 25px;">Telefone: ${formData.telefone}</h4>
          <h4 style="color:black; padding-top: 25px;">Título: ${formData.titulo}</h4>
          <h4 style="color:black; padding-top: 25px;">Descrição: ${formData.descricao}</h4>
        </div>
        <P style=" color: #796A37;">Att,</P>
        <P style=" color: #796A37;">Equipe Centrall Soluções Tecnológicas</P>
      </article><br/><br/><br/>
      <hr style="background-color: #796A37;">
      <footer style="color:black; padding: 10px;">
        <h4>Siga nossas redes sociais:</h4>
        <h5><a style=" color: #796A37; font-style: italic; text-decoration-line: underline;" href="#">INSTAGRAM</a></h5>
        <h5><a style=" color: #796A37; font-style: italic; text-decoration-line: underline;" href="#">YOUTUBE</a></h5>
        <h5><a style=" color: #796A37; font-style: italic; text-decoration-line: underline;" href="#">FACEBOOK</a></h5>
      </footer>
      <hr style="background-color: #796A37;">`;

    await transporter.sendMail({
      from: 'SITE | LL CONSTRUTORA <comercial@llconstrutora.com.br>',
      to: 'll.construtoraltda@hotmail.com',
      subject: 'Formulário Site',
      text: '',
      html: messageHTML,
    });

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu um erro'})


  res.status(200).json({ message: 'Hello from Next.js!' })
}

}