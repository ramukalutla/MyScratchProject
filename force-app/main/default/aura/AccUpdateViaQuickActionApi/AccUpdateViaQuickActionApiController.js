({
	handleClick : function(component, event, helper) {
		var actionAPI = component.find("quickActionAPI");
         var fields={"Name":{"value":"Updated Via QA API"}};
        var args = {actionName: "Account.UpdatetheName", entityName :"Account", recordId: '0012w00000KtxwZAAR' , targetFields: fields}; 
       
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });

	}
})