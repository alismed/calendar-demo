document.addEventListener('DOMContentLoaded', function() {
	var date = "";
	var today = new Date();
	var yyyy = today.getFullYear().toString();
	var MM = (today.getMonth() + 1).toString();
	var dd = today.getDate().toString();
	var date = yyyy + '-' + (MM[1]?MM:"0"+MM[0]) + '-' + (dd[1]?dd:"0"+dd[0]);

	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      defaultView: 'dayGridMonth',
      defaultDate: date,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      },
      events: [
		{
			title: "teste 2019",
			start: "2019-08-08",
			end: "2019-08-08",
			url: "https://www.salesforce.com/dreamforce/"
		},
	  {
			title: "Dreamforce 2019",
			start: "2019-11-19T08:00",
			end: "2019-11-22T15:00",
			url: "https://www.salesforce.com/dreamforce/"
		},
		{
			title: "Winter 20",
			start: "2019-10-12T02:00",
			end: "2019-10-12T02:04",
			url: ""
		},
		{
			title: "2º Bootcamp",
			start: "2019-09-16T09:00",
			end: "2019-09-16T18:00",
			url: ""
		},
		{
			title: "2º Bootcamp",
			start: "2019-09-20T09:00",
			end: "2019-09-20T18:00",
			url: ""
		},
		{
			title: "2º Bootcamp",
			start: "2019-09-23T09:00",
			end: "2019-09-23T18:00",
			url: ""
		},
		{
			title: "Salesforce Day",
			start: "2019-10-23T00:00",
			end: "",
			url: ""
		},
		{
			title: "NA59 Site Switching",
			start: "2020-01-19T05:00",
			end: "",
			url: "https://status.salesforce.com/maintenances/32136"
		},
		{
			title: "NA59 Org Migrations",
			start: "2019-09-08T03:59",
			end: "",
			url: "https://status.salesforce.com/maintenances/47602"
		},
		{
			title: "Critical Update",
			start: "2019-06-16T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer18/release-notes/rn_sales_productivity_email_template_cruc.htm"
		},
		{
			title: "Critical Update",
			start: "2019-09-05T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/spring19/release-notes/rn_forcecom_flow_cruc_formula.htm"
		},
		{
			title: "Critical Update",
			start: "2019-10-04T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/spring18/release-notes/rn_lc_apex_implicit_sharing_keyword_cruc.htm"
		},
		{
			title: "Critical Update",
			start: "2019-10-12T00:00",
			end: "",
			color: '#FF7200',
			url: ""
		},
		{
			title: "Critical Update",
			start: "2019-10-13T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer17/release-notes/rn_apex_cruc_access_public_methods_in_packages.htm"
		},
		{
			title: "Critical Update",
			start: "2019-10-14T00:00",
			end: "",
			url: "https://releasenotes.docs.salesforce.com/en-us/winter19/release-notes/rn_sales_productivity_email_dkim_keys.htm"
		},
		{
			title: "Critical Update",
			start: "2019-10-24T00:00",
			end: "",
			color: '#FF7200',
			url: ""
		},
		{
			title: "Critical Update",
			start: "2019-10-24T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer19/release-notes/rn_networks_tls_disable_cruc.htm"
		},
		{
			title: "Critical Update",
			start: "2019-11-08T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer19/release-notes/rn_networks_user_profile_cruc.htm"
		},
		{
			title: "Critical Update",
			start: "2019-11-TT00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer19/release-notes/rn_forcecom_flow_cruc_security.htm"
		},
		{
			title: "Critical Update",
			start: "2019-12-05T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer19/release-notes/rn_forcecom_flow_cruc_criteria.htm"
		},
		{
			title: "Critical Update",
			start: "2019-12-05T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer19/release-notes/rn_forcecom_flow_cruc_br.htm"
		},
		{
			title: "Critical Update",
			start: "2020-02-162900:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/winter19/release-notes/rn_lex_honor_target_value_formula_fields.htm"
		},
		{
			title: "Critical Update",
			start: "2020-03-01T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer17/release-notes/rn_forcecom_process_emails.htm"
		},
		{
			title: "Critical Update",
			start: "2020-06-05T00:00",
			end: "",
			color: '#FF7200',
			url: "https://releasenotes.docs.salesforce.com/en-us/summer19/release-notes/rn_aura_expr_dynamic_cmp_cruc.htm"
		}
      ]
    });

	calendar.setOption('locale', 'pt-br');
    calendar.render();
});
