import React, {useState} from 'react';
import agent from '../agent';

const Contacts = props => {
    const imageStyle = {
        backgroundImage: "url(http://localhost:5555/avatars/about.jpg)"
      };

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        agent.Profile.contact(name, email, message)
        .then(response => {
          console.log('Сообщение отправлено успешно');
        })
        .catch(error => {
          console.error('Ошибка при отправке сообщения:', error);
        });
      };

return(		
<section className="ftco-section bg-light">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="wrapper">
							<div className="row mb-5">
								<div className="col-md-3">
									<div className="dbox w-100 text-center">
				        		
				        		<div className="text">
					            <p><span>Адрес:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
								</div>
								<div className="col-md-3">
									<div className="dbox w-100 text-center">
				        		
				        		<div className="text">
					            <p><span>Номер телефона:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
					          </div>
				          </div>
								</div>
								<div className="col-md-3">
									<div className="dbox w-100 text-center">
				        		
				        		<div className="text">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
				          </div>
								</div>
								<div className="col-md-3">
									<div className="dbox w-100 text-center">
				        	
				        		<div className="text">
					            <p><span>Веб-сайт</span> <a href="#">yoursite.com</a></p>
					          </div>
				          </div>
								</div>
							</div>
							<div className="row no-gutters">
								<div className="col-md-7">
									<div className="contact-wrap w-100 p-md-5 p-4">
										<h3 className="mb-4">Связаться с нами</h3>
										<div id="form-message-warning" className="mb-4"></div> 
					      		<div id="form-message-success" className="mb-4">
									Ваше сообщение отправлено, спасибо!
					      		</div>
										<form onSubmit={handleSubmit}>
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label className="label" for="name">Имя</label>
														<input type="text" className="form-control" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
													</div>
												</div>
												<div className="col-md-6"> 
													<div className="form-group">
														<label className="label" for="email">Email</label>
														<input type="email" className="form-control" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
													</div>
												</div>
											
												<div className="col-md-12">
													<div className="form-group">
														<label className="label" for="#">Сообщение</label>
														<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group">
														<input type="submit" value="Send Message" className="btn btn-primary" />
														<div className="submitting"></div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="col-md-5 d-flex align-items-stretch">
									<div className="info-wrap w-100 p-5 img" style={imageStyle}>
				          </div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						
					</div>
				</div>
			</div>
		</section>
)
}

export default Contacts;