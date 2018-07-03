***
# testrepository
Testing

## Elastic Search 

Java Client to write data to Elastic Search
  BoolQueryBuilder --> similar to SQL joins or advanced queries

### Auto Complete 
-- Elastic  Has Bulk API which does bulk inserts/ store proceudre
### Mapping 
 -- Dynamic mapping how it is used
 -- Manual Data Mapping - When insrting try to do this.
 --- Do the data tyoe For each document what is the data type
 -- Data Strucutr - try 

  *** Learn Ngram Concept is a so
### Analyzers
  -- Multiple analyzers ngram 
  -- BKD Trees 
### Boost 
  -- Improve boosting fo name. Eg: google ads show up in first results instead of actual results.
  -- Java code : QueryBuilders.multiMAtchQuery(q).field("fulltext").field(field:"name",boost:3.0f);

### Aggregation
  -- Calcuating metrics on data , similar group by , applying percentiles  Eg: How many orders placed, How many people placed orders, How many people bought this item, most selling item.
  --- Java Code : AggregationBuilders.
                 : QueryBuilders.termQuery(name:"address.country.aggs",f_county));

### Facetting 
    -- Eg: Find all iphones , similar to solr facets

### Fuzzy Search
  -- Java code : QueryBuilders.multiMAtchQuery(q).field("fulltext").field(field:"name",boost:3.0f).fuzziness(1);
    -- one letter corrections eg: 

### 

# Kibana
-- Elastic Search - Data Source
-- Window into Data - kibana

# Beats
-- Push Model . Specific to a requirement. Eg FileBeats, winlogbeats, metricsbeats
-- 

# Log Stash
  -- Pull models, similar to ETL , configure data from 

Questions :

Lucene Revolution
BM25 

What is Dynamic Mapping ? 

******************************************************************************************************************************************************

