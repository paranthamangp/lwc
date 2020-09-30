public with sharing class WireServiceAccountManager {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Phone FROM Account Limit 5];    
    }

}
