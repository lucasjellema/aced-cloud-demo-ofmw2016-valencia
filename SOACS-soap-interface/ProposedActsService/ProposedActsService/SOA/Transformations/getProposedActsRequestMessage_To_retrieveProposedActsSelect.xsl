<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
                xmlns:xp20="http://www.oracle.com/XSL/Transform/java/oracle.tip.pc.services.functions.Xpath20"
                xmlns:oraxsl="http://www.oracle.com/XSL/Transform/java"
                xmlns:mhdr="http://www.oracle.com/XSL/Transform/java/oracle.tip.mediator.service.common.functions.MediatorExtnFunction"
                xmlns:oraext="http://www.oracle.com/XSL/Transform/java/oracle.tip.pc.services.functions.ExtFunc"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:oracle-xsl-mapper="http://www.oracle.com/xsl/mapper/schemas"
                xmlns:dvm="http://www.oracle.com/XSL/Transform/java/oracle.tip.dvm.LookupValue"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xref="http://www.oracle.com/XSL/Transform/java/oracle.tip.xref.xpath.XRefXPathFunctions"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:tns="http://xmlns.oracle.com/pcbpel/adapter/db/top/retrieveProposedActs"
                xmlns:socket="http://www.oracle.com/XSL/Transform/java/oracle.tip.adapter.socket.ProtocolTranslator"
                xmlns:ns0="aced.cloud.demo"
                exclude-result-prefixes="xsi oracle-xsl-mapper xsl xsd ns0 tns xp20 oraxsl mhdr oraext dvm xref socket"
                xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
                xmlns:ns1="http://xmlns.oracle.com/pcbpel/adapter/db/ProposedActsService/ProposedActsService/retrieveProposedActs"
                xmlns:jca="http://xmlns.oracle.com/pcbpel/wsdl/jca/"
                xmlns:plt="http://schemas.xmlsoap.org/ws/2003/05/partner-link/">
  <oracle-xsl-mapper:schema>
    <!--SPECIFICATION OF MAP SOURCES AND TARGETS, DO NOT MODIFY.-->
    <oracle-xsl-mapper:mapSources>
      <oracle-xsl-mapper:source type="WSDL">
        <oracle-xsl-mapper:schema location="../WSDLs/ProposedActsService.wsdl"/>
        <oracle-xsl-mapper:rootElement name="getProposedActsRequestMessage" namespace="aced.cloud.demo"/>
      </oracle-xsl-mapper:source>
    </oracle-xsl-mapper:mapSources>
    <oracle-xsl-mapper:mapTargets>
      <oracle-xsl-mapper:target type="WSDL">
        <oracle-xsl-mapper:schema location="../WSDLs/retrieveProposedActs.wsdl"/>
        <oracle-xsl-mapper:rootElement name="retrieveProposedActsSelect_pSubmittedSince_pMininumNumberOfVotes_pMaxNumberOfProposalsInputParameters"
                                       namespace="http://xmlns.oracle.com/pcbpel/adapter/db/top/retrieveProposedActs"/>
      </oracle-xsl-mapper:target>
    </oracle-xsl-mapper:mapTargets>
    <!--GENERATED BY ORACLE XSL MAPPER 12.1.3.0.0(XSLT Build 140529.0700.0211) AT [THU MAR 02 07:21:05 CET 2017].-->
  </oracle-xsl-mapper:schema>
  <!--User Editing allowed BELOW this line - DO NOT DELETE THIS LINE-->
  <xsl:template match="/">
    <tns:retrieveProposedActsSelect_pSubmittedSince_pMininumNumberOfVotes_pMaxNumberOfProposalsInputParameters>
      <tns:pSubmittedSince>
        <xsl:value-of select="/ns0:getProposedActsRequestMessage/ns0:addedSince"/>
      </tns:pSubmittedSince>
      <tns:pMininumNumberOfVotes>
        <xsl:value-of select="/ns0:getProposedActsRequestMessage/ns0:mininumNumberOfVotes"/>
      </tns:pMininumNumberOfVotes>
      <tns:pMaxNumberOfProposals>
        <xsl:value-of select="/ns0:getProposedActsRequestMessage/ns0:maxNumberOfProposals"/>
      </tns:pMaxNumberOfProposals>
    </tns:retrieveProposedActsSelect_pSubmittedSince_pMininumNumberOfVotes_pMaxNumberOfProposalsInputParameters>
  </xsl:template>
</xsl:stylesheet>
