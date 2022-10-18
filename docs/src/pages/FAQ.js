import React, { useState } from "react";
import Main from "components/web/Main";
import faqData from "config/faq.json";

const FAQRow = ({ question, answer }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="card">
			<div className="card-header" id="heading1" onClick={() => setOpen((prev) => !prev)}>
				<h5 className="mb-0">
					<a href="#" className={!open ? "collapsed" : ""} data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
						{question}
					</a>
				</h5>
			</div>
			<div id="collapse1" className={!open ? "collapse" : ""} aria-labelledby="heading1" data-parent="#popularTopics">
				<div className="card-body">{answer}</div>
			</div>
		</div>
	);
};

const FAQ = () => {
	return (
		<Main>
			<section id="idocs_faq">
				<h2>FAQ</h2>
				<p className="text-4">{faqData.title}</p>

				<div className="row">
					<div className="col-lg-12">
						<div className="accordion accordion-alterate arrow-right" id="popularTopics">
							{faqData.data.map((row, key) => {
								return <FAQRow key={key} question={row.question} answer={row.answer} />;
							})}
						</div>
					</div>
				</div>
			</section>
		</Main>
	);
};

export default FAQ;
