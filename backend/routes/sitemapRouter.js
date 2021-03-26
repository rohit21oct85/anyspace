
const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')
const Warehouse = require("../Modals/warehouse");
const States = require("../Modals/States")



let sitemap



const siteMap = async (req, res, next) => {



  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  console.log(sitemap)
  // if we have a cached entry send it
  if (sitemap) {
    console.log("jj")
    res.send(sitemap)
    return
  }

  try {
    const smStream = new SitemapStream({ hostname: 'https://www.anyspaze.com/' })
    const pipeline = smStream.pipe(createGzip())

    // pipe your entries or directly write them.
   // smStream.write({ url: '/p/about-us', changefreq: 'daily', priority: 0.3 });
    smStream.write({ url: '/' })
    smStream.write({ url: '/find-warehouse' })
    smStream.write({ url: '/contact-us' })
    smStream.write({ url: '/login' })
    smStream.write({ url: '/register' })
    smStream.write({ url: '/warehouse-in-india' });
    smStream.write({ url: '/find-warehouse' });
    smStream.write({ url: '/forget-password'});
    smStream.write({ url: '/warehouse-in-india' });
    smStream.write({ url: '/p/about-us' });
    smStream.write({ url: '/p/distribution-management'});
    smStream.write({ url: '/p/inventory-managemen'});
    smStream.write({ url: '/p/order-processing-fulfilment' });
    smStream.write({ url: '/p/privacy-policy'});
    smStream.write({ url: '/p/services' });
    smStream.write({ url: '/p/terms-of-service'});
    smStream.write({ url: '/p/terms-of-service'});

    const states = await States.find({})
    states.forEach((state, i) => {
      smStream.write({ url: `/warehouse-in-${state.slug}` });
    })

    const WarehouseList = await   Warehouse.find({})


    WarehouseList.forEach((w)=>{
        if(w.status === "1"){
        smStream.write({ url:  `/warehouse/${w.slug}/${w._id}`});
        }
    })
    smStream.end()

    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // stream write the response
    pipeline.pipe(res).on('error', (e) => { throw e })
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}
module.exports = siteMap
