//use non-conflicting jquery wrapper
jQuery(document).ready(function($){
//$( document ).ready(function() {

	 
	/*Certifications Detail changes*/
	if($("div.sbMainContentArea.wdk_learnerCertificationDetail").length>0){
		/*hide the More Actions widget on the certification detail page*/
		$("div.wdk_learnerCertificationDetail table[name*='navtable']").css("display","none");
		
		/*hide main tab bar*/
		$("div.sbMainContentArea.wdk_learnerCertificationDetail div.sbMultiSectionTopContainer").parents("table")[0].remove();
		/*gray out "request learning links on certification detail page*/
		$("div.sbMainContentArea.wdk_learnerCertificationDetail a.sbLinkGeneral:contains('RequestLearning')").css("font-size","9pt !important").css("color","#CCCCCC");
		/*Make Register links in Cert table look like green buttons */
		$("span.sbLinkTableDisplay a.sbLinkTableDisplay:contains('Register')").addClass("registerbtn");
		$("span.sbLinkTableDisplay a.sbLinkTableDisplay:contains('View Progress')").addClass("registerbtn");
		/*make "Sections" heading in certs bigger and add space to separate it from stuff above*/
		$( "td.sbContainerPageHeadingText:contains('Sections')" ).css( {
			"font-size":"24px",
			"padding-top":"24px"
		});

		/*sbMainContentArea wdk_learnerCertificationDetail certification detail area*/
		$( "span.sbContainerPageHeadingText:contains('Completion Requirement')" ).css({
			"font-size": "12px", 
			"margin-left": "10px"
		});
		
		$("span.sbContainerPageHeadingText:contains('Status')").css({
			 "font-size": "12px", 
			"margin-left": "10px"
		});
		
		$("span.sbContainerPageHeadingText:contains('Progress')").css({
			"font-size": "12px", 
			"margin-left": "10px"
		});
		
		$("span.sbContainerPageHeadingText:contains('Percentage Completed:')").css({
			"font-size": "12px", 
			"margin-left": "10px"
		});
		
		/*change font size of headings on detail page*/
		$("span.sbContainerPageHeadingText font").css( "font-size", "20px"); 
		$("span.sbContainerPageHeadingText font").css( "padding-bottom", "10px"); 
		$("span.sbMainPageSubHeaderText font").css( "font-size", "20px"); 
		$("span.sbMainPageSubHeaderText font").css( "padding-top", "10px");
		$("span.sbMainPageSubHeaderText font").css( "padding-bottom", "2px");  
		
		/*make the complete title of the link show up in the link instead of the truncated version*/
		 $("td").find("a.sbLinkTableDisplay").filter(':contains("...")').each(
			function(){
				$(this).text($(this).attr("title"));
			}
		 ); 
		$("span.sbLinkTableDisplay").parent("td").css("vertical-align","middle");  
				
	}//end Certifications Detail changes
	
 
	
	/*hide Version and Recertification columns in Certifications Portlet*/
	if($("table.certificationPortlet").length>0){
		$("table.certificationPortlet table#idData_simpleTable td.sbListOddCell:nth-child(3)").hide();
		$("table.certificationPortlet table#idData_simpleTable td.sbListOddCell:nth-child(6)").hide();
		$("table.certificationPortlet  table#idData_simpleTable .sbListPorletEvenCell:nth-child(3)").hide();
		$("table.certificationPortlet  table#idData_simpleTable .sbListPorletEvenCell:nth-child(6)").hide();
		$("table.certificationPortlet  table#idData_simpleTable th.sbListPortletContentHeaderCell:nth-child(3)").hide();
		$("table.certificationPortlet  table#idData_simpleTable th.sbListPortletContentHeaderCell:nth-child(6)").hide();
	}
	/*increase font size in left nav*/
	$(".left-nav-panel").css("font-size","14px")		 	
	
	/*Make Register links in Cert Learning Offerings table look like green buttons */
	$("table[summary='Table Data:Learning Offerings'] a.sbLinkGeneral:contains('Register')").addClass("registerbtn");
	$("table[summary='Table Data:Learning Offerings'] a.sbLinkGeneral:contains('Launch')").addClass("registerbtn");
}) //end document ready
