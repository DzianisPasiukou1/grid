using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GridAzure.Startup))]
namespace GridAzure
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
