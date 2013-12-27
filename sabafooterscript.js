//this file is for testing use of externally hosted scripts with saba theme. Not currently in use.
//use non-conflicting jquery wrapper
jQuery(document).ready(function($){
 
	 
	/*Certifications Detail changes*/
	if(jQuery("div.sbMainContentArea.wdk_learnerCertificationDetail").length>0){
		/*hide the More Actions widget on the certification detail page*/
		jQuery("div.wdk_learnerCertificationDetail table[name*='navtable']").css("display","none");
		
		/*hide main tab bar*/
		jQuery("div.sbMainContentArea.wdk_learnerCertificationDetail div.sbMultiSectionTopContainer").parents("table")[0].remove();
		/*gray out "request learning links on certification detail page*/
		jQuery("div.sbMainContentArea.wdk_learnerCertificationDetail a.sbLinkGeneral:contains('RequestLearning')").css("font-size","9pt !important").css("color","#CCCCCC");
		/*Make Register links in Cert table look like green buttons */
		jQuery("span.sbLinkTableDisplay a.sbLinkTableDisplay:contains('Register')").addClass("registerbtn");
		jQuery("span.sbLinkTableDisplay a.sbLinkTableDisplay:contains('View Progress')").addClass("registerbtn");
		/*make "Sections" heading in certs bigger and add space to separate it from stuff above*/
		jQuery( "td.sbContainerPageHeadingText:contains('Sections')" ).css( {
			"font-size":"24px",
			"padding-top":"24px"
		});

		/*sbMainContentArea wdk_learnerCertificationDetail certification detail area*/
		jQuery( "span.sbContainerPageHeadingText:contains('Completion Requirement')" ).css({
			"font-size": "12px", 
			"margin-left": "10px"
		});
		
		jQuery("span.sbContainerPageHeadingText:contains('Status')").css({
			 "font-size": "12px", 
			"margin-left": "10px"
		});
		
		jQuery("span.sbContainerPageHeadingText:contains('Progress')").css({
			"font-size": "12px", 
			"margin-left": "10px"
		});
		
		jQuery("span.sbContainerPageHeadingText:contains('Percentage Completed:')").css({
			"font-size": "12px", 
			"margin-left": "10px"
		});
		
		/*change font size of headings on detail page*/
		jQuery("span.sbContainerPageHeadingText font").css( "font-size", "20px"); 
		jQuery("span.sbContainerPageHeadingText font").css( "padding-bottom", "10px"); 
		jQuery("span.sbMainPageSubHeaderText font").css( "font-size", "20px"); 
		jQuery("span.sbMainPageSubHeaderText font").css( "padding-top", "10px");
		jQuery("span.sbMainPageSubHeaderText font").css( "padding-bottom", "2px");  
		
		/*make the complete title of the link show up in the link instead of the truncated version*/
		 jQuery("td").find("a.sbLinkTableDisplay").filter(':contains("...")').each(
			function(){
				jQuery(this).text($(this).attr("title"));
			}
		 ); 
		jQuery("span.sbLinkTableDisplay").parent("td").css("vertical-align","middle");  
				
	}//end Certifications Detail changes
	
 
	
	/*hide Version and Recertification columns in Certifications Portlet*/
	if(jQuery("table.certificationPortlet").length>0){
		jQuery("table.certificationPortlet table#idData_simpleTable td.sbListOddCell:nth-child(3)").hide();
		jQuery("table.certificationPortlet table#idData_simpleTable td.sbListOddCell:nth-child(6)").hide();
		jQuery("table.certificationPortlet  table#idData_simpleTable .sbListPorletEvenCell:nth-child(3)").hide();
		jQuery("table.certificationPortlet  table#idData_simpleTable .sbListPorletEvenCell:nth-child(6)").hide();
		jQuery("table.certificationPortlet  table#idData_simpleTable th.sbListPortletContentHeaderCell:nth-child(3)").hide();
		jQuery("table.certificationPortlet  table#idData_simpleTable th.sbListPortletContentHeaderCell:nth-child(6)").hide();
	}
	/*increase font size in left nav*/
	jQuery(".left-nav-panel").css("font-size","14px");		 	
	
	/*Make Register links in Cert Learning Offerings table look like green buttons */
	jQuery("table[summary='Table Data:Learning Offerings'] a.sbLinkGeneral:contains('Register')").addClass("registerbtn");
	jQuery("table[summary='Table Data:Learning Offerings'] a.sbLinkGeneral:contains('Launch')").addClass("registerbtn");
}); //end document ready
