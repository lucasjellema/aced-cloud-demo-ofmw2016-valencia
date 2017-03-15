
package nl.amis.world.view.rssclient;

import java.net.URI;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Generated;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.GenericType;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.api.uri.UriTemplate;

import generated.Feed;

@Generated(value = {
           "wadl|http://141.144.34.222/SoaringTheWorldAtRestService/resources/application.wadl",
           "run|c30b1bd4-85bc-4ed1-9959-7b00936d1dc1" }, comments = "wadl2java, http://wadl.java.net",
           date = "2017-01-20T09:07:38.420+01:00")
public class TheWorldAtRestServiceResources {

    /**
     * The base URI for the resource represented by this proxy
     *
     */
    public final static URI BASE_URI;

    static {
        URI originalURI = URI.create("http://141.144.34.222:80/TheWorldAtRestService/resources/");
        // Look up to see if we have any indirection in the local copy
        // of META-INF/java-rs-catalog.xml file, assuming it will be in the
        // oasis:name:tc:entity:xmlns:xml:catalog namespace or similar duck type
        java.io.InputStream is =
            TheWorldAtRestServiceResources.class.getResourceAsStream("/META-INF/jax-rs-catalog.xml");
        if (is != null) {
            try {
                // Ignore the namespace in the catalog, can't use wildcard until
                // we are sure we have XPath 2.0
                String found =
                    javax.xml.xpath.XPathFactory.newInstance().newXPath().evaluate("/*[name(.) = 'catalog']/*[name(.) = 'uri' and @name ='" +
                                                                                   originalURI + "']/@uri",
                                                                                   new org.xml.sax.InputSource(is));
                if (found != null && found.length() > 0) {
                    originalURI = java.net.URI.create(found);
                }

            } catch (Exception ex) {
                ex.printStackTrace();
            } finally {
                try {
                    is.close();
                } catch (java.io.IOException e) {
                }
            }
        }
        BASE_URI = originalURI;
    }

    public static TheWorldAtRestServiceResources.Rss rss(Client client, URI baseURI) {
        return new TheWorldAtRestServiceResources.Rss(client, baseURI);
    }

    /**
     * Template method to allow tooling to customize the new Client
     *
     */
    private static void customizeClientConfiguration(ClientConfig cc) {
    }

    /**
     * Template method to allow tooling to override Client factory
     *
     */
    private static Client createClientInstance(ClientConfig cc) {
        return Client.create(cc);
    }

    /**
     * Create a new Client instance
     *
     */
    public static Client createClient() {
        ClientConfig cc = new DefaultClientConfig();
        customizeClientConfiguration(cc);
        return createClientInstance(cc);
    }

    public static TheWorldAtRestServiceResources.Rss rss() {
        return rss(createClient(), BASE_URI);
    }

    public static TheWorldAtRestServiceResources.Rss rss(Client client) {
        return rss(client, BASE_URI);
    }

    public static TheWorldAtRestServiceResources.WorldRss worldRss(Client client, URI baseURI) {
        return new TheWorldAtRestServiceResources.WorldRss(client, baseURI);
    }

    public static TheWorldAtRestServiceResources.WorldRss worldRss() {
        return worldRss(createClient(), BASE_URI);
    }

    public static TheWorldAtRestServiceResources.WorldRss worldRss(Client client) {
        return worldRss(client, BASE_URI);
    }

    public static class Rss {

        private Client _client;
        private UriBuilder _uriBuilder;
        private Map<String, Object> _templateAndMatrixParameterValues;

        private Rss(Client client, UriBuilder uriBuilder, Map<String, Object> map) {
            _client = client;
            _uriBuilder = uriBuilder.clone();
            _templateAndMatrixParameterValues = map;
        }

        /**
         * Create new instance using existing Client instance, and a base URI and any parameters
         *
         */
        public Rss(Client client, URI baseUri) {
            _client = client;
            _uriBuilder = UriBuilder.fromUri(baseUri);
            _uriBuilder = _uriBuilder.path("rss");
            _templateAndMatrixParameterValues = new HashMap<String, Object>();
        }

        public <T> T getAsTextPlain(GenericType<T> returnType) {
            UriBuilder localUriBuilder = _uriBuilder.clone();
            WebResource resource = _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
            com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
            resourceBuilder = resourceBuilder.accept("text/plain");
            ClientResponse response;
            response = resourceBuilder.method("GET", ClientResponse.class);
            if (response.getStatus() >= 400) {
                throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
            }
            return response.getEntity(returnType);
        }

        public <T> T getAsTextPlain(Class<T> returnType) {
            UriBuilder localUriBuilder = _uriBuilder.clone();
            WebResource resource = _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
            com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
            resourceBuilder = resourceBuilder.accept("text/plain");
            ClientResponse response;
            response = resourceBuilder.method("GET", ClientResponse.class);
            if (!ClientResponse.class.isAssignableFrom(returnType)) {
                if (response.getStatus() >= 400) {
                    throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                }
            }
            if (!ClientResponse.class.isAssignableFrom(returnType)) {
                return response.getEntity(returnType);
            } else {
                return returnType.cast(response);
            }
        }

    }


    /**
     * Workaround for JAX_RS_SPEC-312
     *
     */
    private static class WebApplicationExceptionMessage extends WebApplicationException {


        private WebApplicationExceptionMessage(Response response) {
            super(response);
        }

        /**
         * Workaround for JAX_RS_SPEC-312
         *
         */
        public String getMessage() {
            Response response = getResponse();
            Response.Status status = Response.Status.fromStatusCode(response.getStatus());
            if (status != null) {
                return (response.getStatus() + (" " + status.getReasonPhrase()));
            } else {
                return Integer.toString(response.getStatus());
            }
        }

        public String toString() {
            String s = "javax.ws.rs.WebApplicationException";
            String message = getLocalizedMessage();
            return (s + (": " + message));
        }

    }

    public static class WorldRss {

        private Client _client;
        private UriBuilder _uriBuilder;
        private Map<String, Object> _templateAndMatrixParameterValues;

        private WorldRss(Client client, UriBuilder uriBuilder, Map<String, Object> map) {
            _client = client;
            _uriBuilder = uriBuilder.clone();
            _templateAndMatrixParameterValues = map;
        }

        /**
         * Create new instance using existing Client instance, and a base URI and any parameters
         *
         */
        public WorldRss(Client client, URI baseUri) {
            _client = client;
            _uriBuilder = UriBuilder.fromUri(baseUri);
            _uriBuilder = _uriBuilder.path("world-rss");
            _templateAndMatrixParameterValues = new HashMap<String, Object>();
        }

        public TheWorldAtRestServiceResources.WorldRss.FeedFeedId feedFeedId(String feedid) {
            return new TheWorldAtRestServiceResources.WorldRss.FeedFeedId(_client,
                                                                          _uriBuilder.buildFromMap(_templateAndMatrixParameterValues),
                                                                          feedid);
        }

        public static class FeedFeedId {

            private Client _client;
            private UriBuilder _uriBuilder;
            private Map<String, Object> _templateAndMatrixParameterValues;

            private FeedFeedId(Client client, UriBuilder uriBuilder, Map<String, Object> map) {
                _client = client;
                _uriBuilder = uriBuilder.clone();
                _templateAndMatrixParameterValues = map;
            }

            /**
             * Create new instance using existing Client instance, and a base URI and any parameters
             *
             */
            public FeedFeedId(Client client, URI baseUri, String feedid) {
                _client = client;
                _uriBuilder = UriBuilder.fromUri(baseUri);
                _uriBuilder = _uriBuilder.path("feed/{feedId}");
                _templateAndMatrixParameterValues = new HashMap<String, Object>();
                _templateAndMatrixParameterValues.put("feedId", feedid);
            }

            /**
             * Create new instance using existing Client instance, and the URI from which the parameters will be extracted
             *
             */
            public FeedFeedId(Client client, URI uri) {
                _client = client;
                StringBuilder template = new StringBuilder(BASE_URI.toString());
                if (template.charAt((template.length() - 1)) != '/') {
                    template.append("/world-rss/feed/{feedId}");
                } else {
                    template.append("world-rss/feed/{feedId}");
                }
                _uriBuilder = UriBuilder.fromPath(template.toString());
                _templateAndMatrixParameterValues = new HashMap<String, Object>();
                UriTemplate uriTemplate = new UriTemplate(template.toString());
                HashMap<String, String> parameters = new HashMap<String, String>();
                uriTemplate.match(uri.toString(), parameters);
                _templateAndMatrixParameterValues.putAll(parameters);
            }

            /**
             * Get feedId
             *
             */
            public String getFeedid() {
                return ((String) _templateAndMatrixParameterValues.get("feedId"));
            }

            /**
             * Duplicate state and set feedId
             *
             */
            public TheWorldAtRestServiceResources.WorldRss.FeedFeedId setFeedid(String feedid) {
                Map<String, Object> copyMap;
                copyMap = new HashMap<String, Object>(_templateAndMatrixParameterValues);
                UriBuilder copyUriBuilder = _uriBuilder.clone();
                copyMap.put("feedId", feedid);
                return new TheWorldAtRestServiceResources.WorldRss.FeedFeedId(_client, copyUriBuilder, copyMap);
            }

            public Feed getAsFeedXml() {
                UriBuilder localUriBuilder = _uriBuilder.clone();
                WebResource resource =
                    _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
                com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
                resourceBuilder = resourceBuilder.accept("application/xml");
                ClientResponse response;
                response = resourceBuilder.method("GET", ClientResponse.class);
                if (response.getStatus() >= 400) {
                    throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                }
                return response.getEntity(Feed.class);
            }

            public <T> T getAsXml(GenericType<T> returnType) {
                UriBuilder localUriBuilder = _uriBuilder.clone();
                WebResource resource =
                    _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
                com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
                resourceBuilder = resourceBuilder.accept("application/xml");
                ClientResponse response;
                response = resourceBuilder.method("GET", ClientResponse.class);
                if (response.getStatus() >= 400) {
                    throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                }
                return response.getEntity(returnType);
            }

            public <T> T getAsXml(Class<T> returnType) {
                UriBuilder localUriBuilder = _uriBuilder.clone();
                WebResource resource =
                    _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
                com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
                resourceBuilder = resourceBuilder.accept("application/xml");
                ClientResponse response;
                response = resourceBuilder.method("GET", ClientResponse.class);
                if (!ClientResponse.class.isAssignableFrom(returnType)) {
                    if (response.getStatus() >= 400) {
                        throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                    }
                }
                if (!ClientResponse.class.isAssignableFrom(returnType)) {
                    return response.getEntity(returnType);
                } else {
                    return returnType.cast(response);
                }
            }

            public Feed getAsFeedJson() {
                UriBuilder localUriBuilder = _uriBuilder.clone();
                WebResource resource =
                    _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
                com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
                resourceBuilder = resourceBuilder.accept("application/json");
                ClientResponse response;
                response = resourceBuilder.method("GET", ClientResponse.class);
                if (response.getStatus() >= 400) {
                    throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                }
                return response.getEntity(Feed.class);
            }

            public <T> T getAsJson(GenericType<T> returnType) {
                UriBuilder localUriBuilder = _uriBuilder.clone();
                WebResource resource =
                    _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
                com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
                resourceBuilder = resourceBuilder.accept("application/json");
                ClientResponse response;
                response = resourceBuilder.method("GET", ClientResponse.class);
                if (response.getStatus() >= 400) {
                    throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                }
                return response.getEntity(returnType);
            }

            public <T> T getAsJson(Class<T> returnType) {
                UriBuilder localUriBuilder = _uriBuilder.clone();
                WebResource resource =
                    _client.resource(localUriBuilder.buildFromMap(_templateAndMatrixParameterValues));
                com.sun.jersey.api.client.WebResource.Builder resourceBuilder = resource.getRequestBuilder();
                resourceBuilder = resourceBuilder.accept("application/json");
                ClientResponse response;
                response = resourceBuilder.method("GET", ClientResponse.class);
                if (!ClientResponse.class.isAssignableFrom(returnType)) {
                    if (response.getStatus() >= 400) {
                        throw new TheWorldAtRestServiceResources.WebApplicationExceptionMessage(Response.status(response.getClientResponseStatus()).build());
                    }
                }
                if (!ClientResponse.class.isAssignableFrom(returnType)) {
                    return response.getEntity(returnType);
                } else {
                    return returnType.cast(response);
                }
            }

        }

    }

}
